export default {
    title: 'Mockjs中文文档-自建文档非官方！',
    description:'mock,mockjs,mockjs中文文档,mockjs文档,mockjs官网挂了',
    outDir: '../dist',
    themeConfig: {
        logo:'/logo.svg',
        siteTitle: 'Mockjs 文档',
        sidebar: [
            {
                text: '开始',
                items: [
                    { text: '开始&安装', link: '/getting-started' },
                    { text: '语法规范', link: '/syntax-specification' }
                ]
            },
            {
                text: 'API', collapsible: true, 
                items: [
                    { text: 'Mock.mock()', link: '/mock' },
                    { text: 'Mock.setup()', link: '/setup' },
                    { text: 'Mock.valid()', link: '/valid' },
                    { text: 'Mock.toJSONSchema()', link: '/to_json_schema' },
                ]
            },
            {
                text: 'Random', collapsible: true,
                items: [
                    { text: 'Random', link: '/random/random' },
                    { text: 'Base', link: '/random/basic' },
                    { text: 'Date', link: '/random/date' },
                    { text: 'Image', link: '/random/image' },
                    { text: 'color', link: '/random/color' },
                    { text: 'Text', link: '/random/text' },
                    { text: 'Name', link: '/random/name' },
                    { text: 'Web', link: '/random/web' },
                    { text: 'Address', link: '/random/address' },
                    { text: 'Helper', link: '/random/helper' },
                    { text: 'Miscellaneous', link: '/random/miscellaneous' },
                ]
            },
            {
                text:'使用示例', collapsible:true,
                items:[
                    { text: '数据模板定义',
                        collapsible:true,
                        items:[
                            { text: 'String', link: '/examples/index#string' },
                            { text: 'Number', link: '/examples/index#number' },
                            { text: 'Boolean', link: '/examples/index#boolean' },
                            { text: 'Object', link: '/examples/index#object' },
                            { text: 'Array', link: '/examples/index#array' },
                            { text: 'Function', link: '/examples/index#function' },
                            { text: 'RegExp', link: '/examples/index#regexp' },
                            { text: 'Path', link: '/examples/index#path' }
                        ]
                    },
                    { 
                        text: '数据占位符定义', 
                        collapsible:true,
                        items:[
                            { text: 'Base', link: '/examples/sapce#basic' },
                            { text: 'Date', link: '/examples/sapce#date' },
                            { text: 'Image', link: '/examples/sapce#image' },
                            { text: 'Color', link: '/examples/sapce#color' },
                            { text: 'Text', link: '/examples/sapce#text' },
                            { text: 'Name', link: '/examples/sapce#name' },
                            { text: 'Web', link: '/examples/sapce#web' },
                            { text: 'Address', link: '/examples/sapce#address' },
                            { text: 'Helper', link: '/examples/sapce#helper' },
                            { text: 'Miscellaneous', link: '/examples/sapce#miscellaneous' },
                        ]
                    },
                ]
            }
        ]
    }
}