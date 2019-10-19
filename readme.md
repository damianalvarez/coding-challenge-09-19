# Radium Rocket - Coding challenge 09-19

```json
Given an array of folders and subfolders, we need to create an algorithm that open all the folders
```

```json
const pages = [
    {
        title: 'folder 1',
        isOpen: false,
        children: []
    },
    {
        title: 'folder 2',
        isOpen: false,
        children: [{
                title: 'folder 2a',
                isOpen: false,
                children: []
            },
            {
                title: 'folder 2b',
                isOpen: false,
                children: [{
                    title: 'folder 2aa',
                    isOpen: false,
                    children: []
                }, ]
            },
        ]
    },
    {
        title: 'folder 3',
        isOpen: false,
        children: []
    },
];
```
