# modern-slider-class

A modern slider class

## How to use

### HTML

```html
<div class="container-fluid">
  <div class="slide--container">
    <div class="slide--container--slide slide--container-fade">
      <img src='src/assets/images/min/mountain.jpg' alt='mountain'>
      <div class="slide--container--context">
        Neue Branchen prägen die Wirtschaft
      </div>
      <div class="slide--container--button">
        <div class="slide--container--button-style">
          <a href="#">Mehr erfahren</a>
        </div>
      </div>
    </div>
    <div class="slide--container--slide slide--container-fade">
      <video autoplay loop>
        <source src="./src/assets/videos/Big_Buck_Bunny.mp4" type='video/mp4' />
      </video>
    </div>
    <div class="slide--container--slide slide--container-fade">
      <img src='src/assets/images/min/city.jpg' alt='city'>
    </div>
    <a href="#" class="prev" title="Previous">&#10094</a>
    <a href="#" class="next" title="Next">&#10095</a>
    <div class="dots--container">
      <span class="dots--container--dot"></span>
      <span class="dots--container--dot"></span>
      <span class="dots--container--dot"></span>
    </div>
  </div>
</div>
```

Include the file into before the body-tag is closed.

```html
<script src="slider.min.js"></script>
```

### Javascript

```JS
let mainSlider = new Slider('.slide--container--slide','.dots--container--dot',0);
mainSlider.init();
```