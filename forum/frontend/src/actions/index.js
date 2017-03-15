export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FORUMSTATE = 'FORUMSTATE';
export const GFBOTH = 'GFBOTH';
export const GNUM = 'GNUM'; //글번호 from DB


export function setGNUM(value){
	return{
		type: GNUM,
		diff: value
	}
}

export function setForumState(value){
	return{
		type: FORUMSTATE,
		diff: value
	}
}

export function gf_doubleChange(value1, value2){
	return{
		type: GFBOTH,
		diff_f: value1,
		diff_g: value2
	}
}