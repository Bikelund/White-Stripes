---
layout: default
title: "The White Stripes"
---

<div class="main-nav">
     <ul class="nav" id="anchor-link">
          <li><a class="custom-underline" href="#home">Home</a></li>
          <li><a class="custom-underline" href="#showcase">Showcase</a></li>
          <li><a class="custom-underline" href="#about">About</a></li>
     </ul>
     <h1 class="title-horizontal">The White Stripes</h1>
</div>

<div class="horizontal-scroll-wrapper squares">
       {% include_relative home.md %}
  <div class="horizontal-scroll-wrapper-showcase">
       {% include_relative showcase.md %}
  </div>
  <div class="horizontal-scroll-wrapper-video">
       {% include_relative video.md %}
  </div>
  <div class="horizontal-scroll-wrapper-biography">
       {% include_relative biography.md %}
  </div>
  <div class="horizontal-scroll-wrapper-about">
       {% include_relative about.md %}
  </div>
  <div class="box5">Contact</div>
</div>

<script src="assets/javascript/introText.js"></script>
<!-- <script src="assets/javascript/anchor.js"></script> -->
<script src="assets/javascript/introTextAnimation.js"></script>
<script src="assets/javascript/showcaseAnimation.js"></script>
<script src="https://kit.fontawesome.com/3e27283071.js"></script>
<script src="assets/javascript/aboutAnim.js"></script>
<script src="assets/javascript/scroll.js"></script>
<script src="assets/javascript/videoscroll.js"></script>
