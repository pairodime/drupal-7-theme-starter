<?php include 'components/header.php'; ?>
<?php include 'components/search-bar.php'; ?>
<!-- end navigation begin content -->
    <main>
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
    </main>
<!-- end content begin footer -->
<?php include 'components/footer.php'; ?>
<?php include 'components/user-cards.php'; ?>
<?php include 'components/admin-menu.php'; ?>
