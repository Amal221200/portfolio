export default {
    name: 'info',
    title: 'Info',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'overview',
            title: 'Overview',
            type: 'text',
        },
        {
            name: 'profile',
            title: 'Profile Picture',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
    ]
}