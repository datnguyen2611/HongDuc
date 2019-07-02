<?php include "header.php"?>
<div class="banner__chitiet">
    <img src="../src/images/news/banner__news.png" alt="" class="img-fluid banner_img">

    <div class="love__line">
        <img src="../src/images/love_line.png" alt="" class="img-fluid">
        <p>chi tiết</p>
    </div>
</div>
<!-- end banner -->

<div id="library-wrapepr">
    <div class="container-fluid">
        <div class="row min-vh-100">
            <!-- sidebar -->
            <aside class="col-12 col-md-2 p-0" id="lib-sidebar">
                <nav class="navbar navbar-expand navbar-dark flex-md-column flex-row align-items-start py-2">
                    <div class="collapse navbar-collapse lib-collapse">
                        <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                            <li class="nav-item text-center">
                                <img src="../src/images/logo.png" class="img-fluid" alt="">
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pl-0 text-center" href="#"><i class="fas fa-book"></i> <span
                                        class="d-none d-md-inline">Câu truyện</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pl-0 text-center" href="#"><i class="fas fa-image"></i> <span
                                        class="d-none d-md-inline">Hình ảnh</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pl-0 text-center" href="#"><i class="fas fa-video"></i> <span
                                        class="d-none d-md-inline">Video</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
            <!-- /sidebar -->

            <!-- content -->
            <main class="col bg-faded" id="lib-content">
                <div class="container">
                    <!-- Categories -->
                    <div class="row">
                        <div class="col-12 col-sm-10">
                            <nav>
                                <ul class="nav tieude-tab" role="tablist" id="myTab">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tab-all" role="tab">Tất
                                            cả</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="">Tin tức</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="">Chăm sóc sức
                                            khỏe</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="">Chia sẻ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="">Nụ cười</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- /Categories -->

                    <!-- Cate content -->
                    <div class="row">
                        <div class="col-12 col-sm-10">
                            <div class="tab-content" id="myTabContent">
                                <!-- All -->
                                <div id="tab-all" class="tab-pane fade show active" role="tabpanel"
                                    aria-labelledby="all-tab">
                                    <div class="gallery-column">

                                        <?php include "image-gallery.php"?>
                                        

                                        <?php include "pagination.php"?>
                                    </div>
                                </div>
                                <!-- /All -->

                            </div>
                        </div>
                    </div>
                    <!-- /Cate content -->
                </div>
            </main>
            <!-- /content -->
        </div>
    </div>
</div>

<!-- end letter__chitiet -->
<?php include "footer.php"?>