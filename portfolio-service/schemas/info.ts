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
            name: 'profile',
            title: 'Profile Picture',
            type: 'image'
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'file',
            options: {
                accept: 'application/pdf'
            }
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