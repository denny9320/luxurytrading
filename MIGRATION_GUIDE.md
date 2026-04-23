# TapingTrading 产品迁移指南

## 产品分类表

| 代码 | 中文分类 | 英文分类 |
|------|---------|---------|
| fragrance | 香水 | Fragrance |
| clothing | 服装 | Clothing |
| shoes | 鞋子 | Shoes |
| bags | 包袋 | Bags |
| accessories | 配饰 | Accessories |
| glasses | 眼镜 | Glasses |
| watches | 手表 | Watches |
| jewelry | 珠宝 | Jewelry |

---

## 香水子类

| 代码 | 中文 | 英文 |
|------|------|------|
| Floral | 花香调 | Floral |
| Woody | 木质调 | Woody |
| Citrus | 柑橘调 | Citrus |
| Oriental | 东方调 | Oriental |
| Fresh | 清新型 | Fresh |
| Chypre | 甘苔调 | Chypre |
| Fougere | 馥奇调 | Fougere |
| Aquatic | 水生调 | Aquatic |
| Gourmand | 美食调 | Gourmand |
| Spicy | 辛辣调 | Spicy |

---

## 产品数据格式

### 必需字段
- `name` - 产品名称（中文）
- `nameEn` - 产品名称（英文）
- `category` - 产品分类（如：fragrance, clothing, bags）
- `price` - 价格（数字）

### 可选字段
- `images` - 图片数组（最多9张，第1张为主图）
- `description` - 产品描述
- `featured` - 是否精选（true/false）

### 香水专用
- `notes` - 香调（用逗号分隔）
- `size` - 规格（如：50ml, 100ml）

### 服装专用
- `sizes` - 尺码数组（如：S,M,L,XL）
- `colors` - 颜色数组

---

## 示例数据

```json
{
  "id": "fr001",
  "name": "玫瑰精粹",
  "nameEn": "Rose Essence",
  "category": "fragrance",
  "subcategory": "Floral",
  "price": 1680,
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "description": "优雅的玫瑰香调",
  "notes": "玫瑰,茉莉,白麝香",
  "size": "50ml",
  "featured": true
}
```

---

## 数据结构

```json
{
  "fragrance": [...],
  "clothing": [...],
  "shoes": [...],
  "bags": [...],
  "accessories": [...],
  "glasses": [...],
  "watches": [...],
  "jewelry": [...]
}
```

---

## 迁移步骤

### 1. 准备数据
- 从源网站导出产品列表
- 按分类整理产品

### 2. 填写模板
- 下载产品数据模板
- 按格式填写每个产品

### 3. 上传审核
- 上传数据文件
- 我帮你检查并生成 JSON

### 4. 更新网站
- 生成最终的 products.json
- 上传到 GitHub

---

## 下一步

请提供：
1. 源网站地址
2. 或者导出产品的文件（CSV/Excel）

我会帮你自动处理！