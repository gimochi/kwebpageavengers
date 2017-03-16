export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FORUMSTATE = 'FORUMSTATE';
export const GFBOTH = 'GFBOTH';
export const GALLERYSTATE = 'GALLERYSTATE';
export const GNUM = 'GNUM'; //글번호 from DB


export function setGNUM(value){
	return{
		type: GNUM,
		diff: value
	}
}	//어떤 글을 게시할 것인가.

export function setForumState(value){
	return{
		type: FORUMSTATE,
		diff: value
	}
}	//어떤 게시판 띄울것인가.

export function gf_doubleChange(value1, value2){
	return{
		type: GFBOTH,
		diff_f: value1,
		diff_g: value2
	}
} 	//편의 함수

export function setGalleryState(value){
	return{
		type: GALLERYSTATE,
		diff: value
	}
} 	//갤러리 스테이트 변경