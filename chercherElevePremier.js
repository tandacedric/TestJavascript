

function chercherElevePremier(tabEleve){
	//Si ce n'est pas un tableau ou si on a passé null ou s'il n'y pas d'element dans le tableau,  
	//alors je retourne null pour dire qu'il n'y a pas d'eleve permier
	if( !Array.isArray(tabEleve) || tabEleve === null || tabEleve.length === 0) return 0;
	// si on viens ici, cela voudrai dire qu'il y'a au moins un element dans le tableau
	// alors je peux mette comme premiere de la classe, le premier eleve de  mon tableau 
	var elevePremier =  tabEleve[0];
	// maintenant, je verifie si aucun autre eleve ne lui depasse. ( je ne prends plus l'eleve 0,
	//	mais a partir de l'eleve 1) donc ma boucle commence par 1
	for(var i = 1; i< tabEleve.length ; i++ ){
		var eleveCourant  = tabEleve[i];
		// si la moyenne de l'eleve  premier est 
		if(elevePremier.moyenne() < eleveCourant.moyenne())elevePremier = eleveCourant;
	}
	return elevePremier;
	
}


 var eleve1 ={
		 nom:"nom 1",
		 prenom: "prenom 1",
		 notes:[1,9,15.5,13,6,9,14],
		 moyenne:function(){
			var taille = this.notes.length;
			if(taille == 0) return 0;
			var s = 0;
			for(var i = 0; i < taille; i++){
				s+= this.notes[i];
			}
			return s / taille; 
		}
	}
	
 var eleve2 ={
		 nom:"nom 2",
		 prenom: "prenom 2",
		 notes:[5,4,18.5,6,17,4,16],
		 moyenne:function(){
			var taille = this.notes.length;
			if(taille == 0) return 0;
			var s = 0;
			for(var i = 0; i < taille; i++){
				s+= this.notes[i];
			}
			return s / taille; 
		}
	}
	
var eleve3 ={
		 nom:"nom 3",
		 prenom: "prenom 3",
		 notes:[12,14,18.5,6,5,2,10],
		 moyenne:function(){
			var taille = this.notes.length;
			if(taille == 0) return 0;
			var s = 0;
			for(var i = 0; i < taille; i++){
				s+= this.notes[i];
			}
			return s / taille; 
		}
	}
var eleve4 ={
		 nom:"nom 3",
		 prenom : "prenom 3",
		 notes:[7,7,4.5,14,12,18,4],
		 moyenne:function(){
			var taille = this.notes.length;
			if(taille == 0) return 0;
			var s = 0;
			for(var i = 0; i < taille; i++){
				s+= this.notes[i];
			}
			return s / taille; 
		}
	}
	
var tab = [eleve1,eleve2,eleve3,eleve4];

var elevePermier = chercherElevePremier(tab);

if(elevePermier!==null){
	console.log("L'eleve premier c'est : "+ elevePermier.nom+" avec "+elevePermier.moyenne()+" de moyenne");
}else{
	console.log("PAs d'eleve premier");
}
