let photos = [
	['20220811.JPG', '2022/08/11'],
	['20221008.JPG', '2022/10/08'],
	['20221008-171325.JPG', '2022/10/08'],

]




function getPhotos() {

	var gallary = document.getElementById("gallary");
	// 向li中添加文本内容

	for (var i = 0; i < photos.length; i++) {
		console.log(photos[i][0]);
	}

	console.log(photos.length)

	for (i = 0; i < photos.length; i++) {
		var li = document.createElement('li')

		var newPhoto = `
	<li class="project-item  active" data-filter-item data-category="web design">
	  <a href="#">
	
	    <figure class="project-img">
	      <div class="project-item-icon-box">
	        <ion-icon name="eye-outline"></ion-icon>
	      </div>
	      <img src="./photos/` + photos[i][0] + `" alt="dsm." loading="lazy">
	    </figure>
	
	    <p class="photo-date">` + photos[i][1] + `</p>
	
	  </a>
	</li>
	`

		li.innerHTML = newPhoto
		// 向指定div中插入li
		gallary.appendChild(li);
	}
}
