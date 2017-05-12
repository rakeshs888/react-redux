export const selectUser=(user)=>{
	console.log("You clicked on Student name", user.name);
	return {
		type: "USER_SELECTED",
		payload: user
	}
};