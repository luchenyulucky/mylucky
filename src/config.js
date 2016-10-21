module.exports=function(router){

	router.map({
		"/err":{
			component:function(resolve){
				require(["./err"],resolve)
			}
		},
		"/login":{
			component:function(resolve){
				require(["./login"],resolve)
			}
		},
		"/home":{
			component:function(resolve){
	 			require(["./home"],resolve)
	 		},
	 		subRoutes:{

			 	"/onePage/:id":{
			 		name:"one",
			 		component:function(resolve){
			 			require(["./one"],resolve)
			 		},
			 		
			 	},
			 	"/twoPage":{
			 		component:function(resolve){
			 			require(["./two"],resolve)
			 		}
			 	}
	 		}
		}
	 	
	 })
	 router.redirect({
	 	"/":"/login",
	 	"*":"/err"
	 })

}
