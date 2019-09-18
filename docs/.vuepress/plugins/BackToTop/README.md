# @vuepress-reco/vuepress-plugin-back-to-top

Back-to-top plugin for vuepress-theme-reco or other vuepress theme

## 选项

### icon

按钮中间的图标名字。

- 类型：`string`
- 默认值：`reco-up`

### customStyle

自定义按钮的样式。

- 类型：`Object`
- 默认值：
  ```js
  customStyle = {
    right: '1rem',
    bottom: '6rem',
    width: '2.5rem',
    height: '2.5rem',
    'border-radius': '.25rem',
    'line-height': '2.5rem',
    backgroundColor: 'rgba(231, 234, 241,.5)'
  }
  ```

### visibilityHeight

按钮出现时的最小滚动高度。

- 类型：`number`
- 默认值：`400`
