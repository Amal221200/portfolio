export default {
    name: 'skill',
    title: 'Skill',
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
        }
    ]
}