/** 
 * Given an array of folders and subfolders, we need to create an algorithm that open all the folders
 */

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

const openFolders = (_folders) => {
    return _folders.map((_folder) => {
        if (!folder) return false;
        if (folder.children && _folder.children.length > 0) openFolders(_folder.children);
        if (!_folder.isOpen) {
            _folder.isOpen = true;
            return _folder;
        }
    })
};

const openedFolders = openFolders(pages);
console.log('OPENED FOLDERS', openedFolders);