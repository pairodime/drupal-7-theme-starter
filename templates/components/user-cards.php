<!--cart-->
<div class="user-menu__card" id="user-cart">
  <div class="user-menu__card-section" id="cart-header">
    <div class="user-menu__card--title">Your Cart</div>
    <div class="user-menu__card--close-btn"></div>
  </div>
  <div class="user-menu__card-section" id="cart-items">
    <div class="user-menu__cart--item">
      <div class="user-menu__cart--item-product">Capita<span>156 BSOD</span></div>
      <div class="user-menu__cart--item-price">429.99</div>
      <div class="user-menu__cart--item-image"><img src="<?php print base_path();?>sites/all/themes/c31617/images/snowboard.png"/></div>
    </div>
    <div class="user-menu__cart--item">
      <div class="user-menu__cart--item-product">Capita<span>156 BSOD</span></div>
      <div class="user-menu__cart--item-price">429.99</div>
      <div class="user-menu__cart--item-image"><img src="<?php print base_path();?>sites/all/themes/c31617/images/snowboard.png"/></div>
    </div>
  </div>
  <div class="user-menu__card-section" id="checkout"><a class="button__primary">Check Out</a></div>
</div>
<!--login-->
<div class="user-menu__card" id="user-login">
  <div class="user-menu__card-section" id="cart-header">
    <div class="user-menu__card--title">User</div>
    <div class="user-menu__card--close-btn"></div>
  </div>
  <div class="user-menu__card-section" id="login-form">
    <?php
      $user_login_block = drupal_get_form("user_login_block"); 
      $form = drupal_render($user_login_block);
      print $form;
    ?>
  </div>
</div>