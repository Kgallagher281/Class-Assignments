function Albumn(){
this.photos = [];

}

Albumn.prototype.addPhoto = function(src, location){
let photo = new Photo(src, location);
this.photos.push( photo );
return this; 

};
Albumn.prototype.listPhotos = function(){
return this.photos.join(",");

}

Albumn.prototype.getPhoto = function(index){
return this.photos[index];

}


function Photo( src, location);{
this.src = src;
this.location = location;


Photo.prototype.toString = function(){

	return `$(this.src) (${this.location})`;
}

}





















const myAlbumn = new Albumn();

myAlbumn.addPhoto("dog.jpg" , "Home").addPhoto("Cat", "Hat";)