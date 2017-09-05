<template>

  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <!-- The mobile navbar-toggle button can be safely removed since you do not need it in a non-responsive implementation -->
        <a class="navbar-brand" href="#">Project name</a>
      </div>
      <!-- Note that the .navbar-collapse and .collapse classes have been removed from the #navbar -->
      <div id="navbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#" > <router-link :to="'/test1'" class="ahead">跳转test1</router-link></a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li class="dropdown-header">Nav header</li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
      </div><!--/.nav-collapse -->

    </div>
  </nav>

</template>

<style>
  .header{
    color: #ff9900;
    background: #19be6b;
  }
 .ahead{
   font-size: 30px;
   font-weight: 600;
 }
</style>
