export default {
    name: 'project',
    title: 'Project',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'overview',
            title: 'Small Overview',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                }
            ]
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        }
    ]
}