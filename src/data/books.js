export const categories = ['全部', '教材', '文学', '计算机', '考试', '科普']

export const initialBooks = [
  {
    id: 1,
    title: '高等数学（第七版）上册',
    author: '同济大学数学系',
    category: '教材',
    price: 25,
    cover: 'https://picsum.photos/seed/math/300/400',
    description: '经典高数教材，笔记齐全，无破损。'
  },
  {
    id: 2,
    title: '活着',
    author: '余华',
    category: '文学',
    price: 12,
    cover: 'https://picsum.photos/seed/huozhe/300/400',
    description: '九成新，阅读一遍，无划线。'
  },
  {
    id: 3,
    title: 'JavaScript 高级程序设计',
    author: 'Matt Frisbie',
    category: '计算机',
    price: 45,
    cover: 'https://picsum.photos/seed/js/300/400',
    description: '前端必读，第四版，书角轻微磨损。'
  },
  {
    id: 4,
    title: '大学英语四级真题',
    author: '新东方',
    category: '考试',
    price: 8,
    cover: 'https://picsum.photos/seed/cet4/300/400',
    description: '仅做过两套，其余全新。'
  },
  {
    id: 5,
    title: '数据结构（C 语言版）',
    author: '严蔚敏',
    category: '计算机',
    price: 20,
    cover: 'https://picsum.photos/seed/ds/300/400',
    description: '考研常用教材，附赠习题册。'
  },
  {
    id: 6,
    title: '线性代数（第六版）',
    author: '同济大学数学系',
    category: '教材',
    price: 15,
    cover: 'https://picsum.photos/seed/algebra/300/400',
    description: '大一必备，书内有少量重点划线。'
  },
  {
    id: 7,
    title: '红楼梦',
    author: '曹雪芹',
    category: '文学',
    price: 30,
    cover: 'https://picsum.photos/seed/hongloumeng/300/400',
    description: '人民文学出版社，上下两册，九五新。'
  },
  {
    id: 8,
    title: '深入理解计算机系统',
    author: 'Randal E. Bryant',
    category: '计算机',
    price: 60,
    cover: 'https://picsum.photos/seed/csapp/300/400',
    description: '神书，第三版，无笔记无折痕。'
  },
  {
    id: 9,
    title: '考研英语词汇闪过',
    author: '考研英语研究组',
    category: '考试',
    price: 10,
    cover: 'https://picsum.photos/seed/english/300/400',
    description: '重点词汇都背过了，适合二轮复习。'
  },
  {
    id: 10,
    title: '时间简史',
    author: '史蒂芬·霍金',
    category: '科普',
    price: 18,
    cover: 'https://picsum.photos/seed/time/300/400',
    description: '硬壳精装版，适合收藏。'
  },
  {
    id: 11,
    title: '大学物理实验教程',
    author: '李天应',
    category: '教材',
    price: 12,
    cover: 'https://picsum.photos/seed/physics/300/400',
    description: '实验报告册还在，全空白。'
  },
  {
    id: 12,
    title: '三体（全集）',
    author: '刘慈欣',
    category: '文学',
    price: 50,
    cover: 'https://picsum.photos/seed/santi/300/400',
    description: '科幻巨作，三本合售，无破损。'
  },
  {
    id: 13,
    title: '计算机网络（第七版）',
    author: '谢希仁',
    category: '计算机',
    price: 22,
    cover: 'https://picsum.photos/seed/network/300/400',
    description: '考研408指定教材，侧边有标签贴。'
  },
  {
    id: 14,
    title: '马克思主义基本原理概论',
    author: '本书编写组',
    category: '教材',
    price: 5,
    cover: 'https://picsum.photos/seed/marx/300/400',
    description: '期末考完出，随便给点就行。'
  },
  {
    id: 15,
    title: '人类简史',
    author: '尤瓦尔·赫拉利',
    category: '科普',
    price: 28,
    cover: 'https://picsum.photos/seed/history/300/400',
    description: '中信出版社，有书签，无笔记。'
  }
]

export function fetchBooks() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...initialBooks]), 400)
  })
}

export function fetchBookById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialBooks.find((b) => b.id === Number(id)) || null)
    }, 300)
  })
}