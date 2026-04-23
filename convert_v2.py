#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import pandas as pd
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("Reading Excel...")
df = pd.read_excel('product_file.xlsx')

print(f"Total rows: {len(df)}")

# Initialize categories
products = {
    'fragrance': [],
    'clothing': [],
    'shoes': [],
    'bags': [],
    'accessories': [],
    'glasses': [],
    'watches': [],
    'jewelry': [],
    'other': []
}

# Keywords for each category
keywords = {
    'fragrance': ['EDT', 'EDP', 'Perfume', 'Cologne', 'Toilette', 'Parfum', '香水', '香氛', '淡香', '浓香', 'EDP', 'EDT', 'Pour Homme', 'Pour Femme', 'Aqua', 'Intense', 'Extreme', 'Sport', 'Limited'],
    'clothing': ['Clothing', 'Dress', 'Shirt', 'Jacket', 'Coat', 'Sweater', 'Hoodie', 'Pant', 'Skirt', 'Blouse', '服装', '裙子', '衬衫', '外套', '西装', '毛衣'],
    'shoes': ['Shoe', 'Sneaker', 'Boot', 'Heel', 'Sandals', 'Loafer', 'Slipper', '鞋', '运动鞋', '皮鞋', '靴子', '凉鞋', 'Slippers'],
    'bags': ['Bag', 'Purse', 'Wallet', 'Clutch', 'Tote', 'Backpack', 'Satchel', '包', '钱包', '背包', '手提包', '单肩包'],
    'accessories': ['Hat', 'Cap', 'Scarf', 'Belt', 'Glove', 'Tie', 'Cufflink', 'Sock', '围巾', '帽子', '腰带', '手套'],
    'glasses': ['Glasses', 'Sunglasses', 'Eyewear', 'Specs', '眼镜', '太阳镜', '墨镜'],
    'watches': ['Watch', 'Smartwatch', 'Bracelet', '手表', '智能表'],
    'jewelry': ['Necklace', 'Bracelet', 'Ring', 'Earring', 'Pendant', '珠宝', '项链', '戒指', '耳环', '手链']
}

# Column indices
NAME_COL = 0
PRICE_COL = 31
IMAGE_COL = 18
CAT_COL = 4
DESC_COL = 3

processed = 0

print("Processing...")

for idx in range(1, len(df)):
    try:
        row = df.iloc[idx]
        
        # Get name
        name = str(row.iloc[NAME_COL]) if pd.notna(row.iloc[NAME_COL]) else ''
        if not name or name == 'nan':
            continue
            
        # Get price
        try:
            price = float(row.iloc[PRICE_COL]) if pd.notna(row.iloc[PRICE_COL]) else 0
        except:
            price = 0
            
        if price <= 0:
            continue
        
        name_lower = name.lower()
        
        # Determine category by keywords
        ptype = 'other'
        
        # Check specific keywords first (more specific = higher priority)
        if any(x in name_lower for x in ['edt', 'edp', 'perfume', 'cologne', 'toilette', 'parfum', 'pour femme', 'pour homme']):
            ptype = 'fragrance'
        elif any(x in name_lower for x in ['watch', 'smartwatch', 'bracelet']):
            ptype = 'watches'
        elif any(x in name_lower for x in ['glasses', 'sunglasses', 'eyewear', 'specs']):
            ptype = 'glasses'
        elif any(x in name_lower for x in ['necklace', 'ring', 'earring', 'pendant', 'jewelry']):
            ptype = 'jewelry'
        elif any(x in name_lower for x in ['bag', 'purse', 'wallet', 'tote', 'backpack', 'clutch']):
            ptype = 'bags'
        elif any(x in name_lower for x in ['shoe', 'sneaker', 'boot', 'heel', 'sandal', 'loafer']):
            ptype = 'shoes'
        elif any(x in name_lower for x in ['dress', 'jacket', 'coat', 'sweater', 'shirt', 'blouse', 'pant', 'hoodie']):
            ptype = 'clothing'
        elif any(x in name_lower for x in ['hat', 'cap', 'scarf', 'belt', 'tie', 'glove', 'cufflink']):
            ptype = 'accessories'
        else:
            # Check for Chinese characters
            if '香水' in name or '淡香' in name or '浓香' in name or '香氛' in name:
                ptype = 'fragrance'
            elif '服装' in name or '裙子' in name or '衬衫' in name:
                ptype = 'clothing'
            elif '鞋' in name:
                ptype = 'shoes'
            elif '包' in name:
                ptype = 'bags'
            elif '眼镜' in name:
                ptype = 'glasses'
            elif '手表' in name:
                ptype = 'watches'
            elif '珠宝' in name or '项链' in name or '耳环' in name:
                ptype = 'jewelry'
            elif '围巾' in name or '帽子' in name:
                ptype = 'accessories'
            else:
                ptype = 'fragrance'  # Default to fragrance as most products
        
        # Get images
        images = []
        try:
            img_str = str(row.iloc[IMAGE_COL]) if pd.notna(row.iloc[IMAGE_COL]) else ''
            if img_str and 'http' in img_str:
                for img in img_str.split(';'):
                    img = img.strip()
                    if img and 'http' in img and img not in images:
                        images.append(img)
        except:
            pass
        
        # Get description
        try:
            desc = str(row.iloc[DESC_COL]) if pd.notna(row.iloc[DESC_COL]) else ''
            desc = desc.replace('\n', ' ').replace('\\n', ' ').strip()[:500]
        except:
            desc = ''
        
        # Create product
        cat_name = {
            'fragrance': 'Fragrance',
            'clothing': 'Clothing',
            'shoes': 'Shoes',
            'bags': 'Bags',
            'accessories': 'Accessories',
            'glasses': 'Glasses',
            'watches': 'Watches',
            'jewelry': 'Jewelry',
            'other': 'Other'
        }
        
        product = {
            'id': f"{ptype[0]}{str(idx).zfill(5)}",
            'name': name[:100],
            'nameEn': name[:100],
            'category': cat_name.get(ptype, 'Other'),
            'price': round(price, 2),
            'images': images[:9],
            'description': desc[:500],
            'featured': processed < 100
        }
        
        # Add type-specific fields
        if ptype == 'fragrance':
            size_match = re.search(r'(\d+)\s*ml', name, re.IGNORECASE)
            product['size'] = size_match.group(1) + 'ml' if size_match else '50ml'
            
            notes_match = re.search(r'(Floral|Woody|Citrus|Fresh|Oriental|Spicy|Aquatic|Green|Chypre|Fougere|Gourmand)', name, re.IGNORECASE)
            if notes_match:
                product['notes'] = notes_match.group(1)
        
        # Add to collection
        products[ptype].append(product)
        processed += 1
        
    except:
        pass

print(f"\n=== DONE ===")
print(f"Total: {processed}")

# Summary
print(f"\nProducts by category:")
for cat, prods in products.items():
    if len(prods) > 0:
        print(f"  {cat}: {len(prods)}")

# Save
with open('data/products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print(f"\nSaved to data/products.json")