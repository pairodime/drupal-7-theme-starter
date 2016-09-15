<nav id="navigation">
  <section>
      <div class="container">
          
      </div>
    </section>
</nav>
<!-- end navigation begin content -->
    <?php
    
    print render($title_prefix);
    print render($title_suffix);
    print $messages;
    print render($page['help']);

    global $user;
      if(drupal_is_front_page()){
        //if page front
      }
      if (!isset($account)) {
        $account = $user;
      }

      if ($page['content']) {
          print render($page['content']);
      }
    ?>
<!-- end content begin footer -->
    <footer id="footer">
      <section>
        <div class="container">
          
        </div>
      </section>
    </footer>