//https://github.com/ganeshmani/react-piano-hooks
export const  getKeyboardShortcutsForNote = (keyboardMap, note) => {
    const keyboardShortcuts = Object.keys(keyboardMap);
    return keyboardShortcuts.filter(shortcut => keyboardMap[shortcut] === note);
  }