setUp
setUpRegistryFileSystem
  ^ registryFileSystem := FileSystem memory
    createDirectory: 'GsDevKitRoot';
    createDirectory: 'GsDevKitRoot/registry';
    createDirectory: 'GsDevKitRoot/repos';
    createDirectory: 'GsDevKitRoot/repos/testRepo1';
    createDirectory: 'GsDevKitRoot/stones';
    createDirectory: 'GsDevKitRoot/stones/testStone1';
    createDirectory: 'GsDevKitRoot/remoteStones';
    createDirectory: 'GsDevKitRoot/remoteStones/testStone1';
    createDirectory: 'myProject';
    createDirectory: 'myProject/stones';
    createDirectory: 'myProject/stones/testStone2';
    createDirectory: 'productionStones';
    createDirectory: 'productionStones/testStone3';
    createDirectory: 'gitRepos';
    yourself