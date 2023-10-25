export const changeFontSize = (fontSize: number) => ({
    type: 'CHANGE_FONT_SIZE',
    payload: fontSize,
});

export const changeLanguage = (language: string) => ({
    type: 'CHANGE_LANGUAGE',
    payload: language,
});