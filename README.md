# A published examples from Babylon.js Editor v4.0 beta2

# Background

Babylon.js Editor has been updated as wonderful WebGL contents editor like Unity.  

The repository is an example of Babylon.js Editor project.   

Environment :  Babylon.js Editor v4.0 beta7 or later

# Make environment of Babylon.js Editor

![overview](./forReadme/BJSEditor_main_screen.jpg)

1. Get Babylon.js Editor source  

```bash
$ git clone https://github.com/BabylonJS/Editor.git
```

2. Switch release branch and build

```bash
$ git checkout -b release/4.0.0 origin/release/4.0.0
$ npm install
$ npm run build
```

3. Run Babylon.js Editor.exe ( or Babylon.js Editor.app if you use Mac)  

```
electron-packages / windows /Babylon.js Editor.exe 
```

```
electron-packages / mac /Babylon.js Editor.app
```

# Run the sample project

1. Put the repo on any floder

2. Run Babylon.js Editor and select "workspace.editorworkspace" file  

![](./forReadme/select_existing_workspace.jpg)

3. Press Play button  

![](./forReadme/playbutton_on_babylonjseditor.jpg)

Another preview window is showed. You can also check your own browser by accessing "http://<IP address>:1338"

# About the sample

- A simple ping pong game  
- Key  
  A: left move  
  D: right move    
  space : Start play / Shoot sphere    

![](./forReadme/game_scene.gif)  

The repo is an experimental trial of Babylon.js Editor.  Therefore each of code are not refactored.

# Reference

Currently all support posts below are only Japanese. English version will be posted soon.  

[UnityのようにBabylon.jsコンテンツが作れる「Babylon.js Editor」が大幅アップデートしていたので使い方を調べてみました](https://www.crossroad-tech.com/entry/babylonjs-editor-4beta2-review)  

[Unityライクの操作になったBabylon.js Editorで簡単なゲームを作ります Vol.1（ステージ作成、操作）](https://www.crossroad-tech.com/entry/babylonjs-editor-4beta2-make-game1)  

[Unityライクの操作になったBabylon.js Editorで簡単なゲームを作ります Vol.2（物理エンジン）](https://www.crossroad-tech.com/entry/babylonjs-editor-4beta2-make-game2)  

[Unityライクの操作になったBabylon.js Editorで簡単なゲームを作ります Vol.3（衝突判定）](https://www.crossroad-tech.com/entry/babylonjs-editor-4beta2-make-game3)  

[Unityライクの操作になったBabylon.js Editorで簡単なゲームを作ります Vol.4（GUIの追加）](https://www.crossroad-tech.com/entry/babylonjs-editor-4beta2-make-game4)  

[Unityライクの操作になったBabylon.js Editorで簡単なゲームを作ります Vol.5（得点加算、ライフ変更、テキスト表示）](https://www.crossroad-tech.com/entry/babylonjs-editor-4beta2-make-game5)  

[Unityライクの操作になったBabylon.js Editorで簡単なゲームを作ります Vol.6（サーバに格納して実行）](https://www.crossroad-tech.com/entry/babylonjs-editor-4beta2-make-game6)  