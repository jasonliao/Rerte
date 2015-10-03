export function bold () {
	document.execCommand('bold', false, null);
}

export function italic () {
	document.execCommand('italic', false, null);
}

export function underline () {
	document.execCommand('underline', false, null);
}

export function strikethrough () {
	document.execCommand('strikeThrough', false, null);
}


export function subscript () {
	document.execCommand('subscript', false, null);
}

export function superscript () {
	document.execCommand('superscript', false, null);
}

export function link () {
	document.execCommand('createLink', false, 'https://www.baidu.com');
}

export function unlink () {
	document.execCommand('unlink', false, null);
}

export function indent () {
	document.execCommand('indent', false, null);
}

export function outdent () {
	document.execCommand('outdent', false, null);
}

export function list_ul () {
	document.execCommand('insertUnorderedList', false, null);
}

export function list_ol () {
	document.execCommand('insertOrderedList', false, null);
}

export function undo () {
	document.execCommand('undo', false, null);
}

export function repeat () {
	document.execCommand('redo', false, null);
}

export function align_center () {
	document.execCommand('justifyCenter', false, null);
}

export function align_justify () {
	document.execCommand('justifyFull', false, null);
}

export function align_left () {
	document.execCommand('justifyLeft', false, null);
}

export function align_right () {
	document.execCommand('justifyRight', false, null);
}

export function change_fontName (fontName='Open Sans') {
	document.execCommand('fontName', false, fontName);
}

export function change_fontSize (fontSize='Normal') {
	switch (fontSize) {
		case 'Small':
			document.execCommand('fontSize', false, 2);
			break;
		case 'Normal':
			document.execCommand('fontSize', false, 3);
			break;
		case 'Large':
			document.execCommand('fontSize', false, 5);
			break;
		case 'Huge':
			document.execCommand('fontSize', false, 6);
			break;
		default:
			document.execCommand('fontSize', false, 3);
			break;
	}
}