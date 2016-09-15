<main id="user-profile">
      <section id="page-header">
            <div class="container">
                <h1>User Dashboard</h6>
            </div>
      </section>
  
    <section id="profile"<?php print $attributes; ?>>
        <div class="container">
            <div id="acount-Information">
                    <?php
                  	     $account = $GLOBALS['user'];
                  	     $username = $account->name;
                    ?>
            </div>
            <section id="user-logout">
              <a href="<?php print base_path();?>user/logout">Logout</a>
            </section>
        </div>
    </section>
</main>