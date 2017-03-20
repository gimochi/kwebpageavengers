export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FORUMSTATE = 'FORUMSTATE';
export const GFBOTH = 'GFBOTH';
export const GALLERYSTATE = 'GALLERYSTATE';
export const GNUM = 'GNUM'; //글번호 from DB
export const SNUM = 'GNUM'; //사진첩 사진 번호 from DB
export const CATEGORY = 'CATEGORY'; //사진첩 카테고리 번호 from DB
export const G_2 = 'G_2'; //사진첩 2개 인포 from DB
export const G_ALL = 'G_ALL'; //사진첩 모든 인포 from DB


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

export function GalleryNUM(value){
	return{
		type: SNUM,
		diff: value
	}
} 	//갤러리 사진 번호

export function GalleryCategory(value){
	return{
		type: CATEGORY,
		diff: value
	}
} 	//갤러리 사진 번호

export function set2Gallery(value1, value2, value3){
	return{
		type: G_2,
		diff_s : value1,
		diff_n : value2
	}
}

export function setAllGallery(value1, value2, value3){
	return{
		type: G_ALL,
		diff_s : value1,
		diff_n : value2,
		diff_c : value3
	}
}