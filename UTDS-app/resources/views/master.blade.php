<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal UTDS</title>
    <link rel="stylesheet" href="{{ asset('assets/fonts/MingCute.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/bootstrap.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/style.css')}}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="container pt-3 pb-1 d-flex gap-4">   
        <aside id="aside" class="bg-blue rounded-lg d-flex flex-column align-items-center gap-2 py-4 px-2 h-680">
            <div class="bg-white rounded px-1">
                <a href="#" class="p-3 d-flex justify-content-center align-items-center">
                    <img class="logo-size" src="assets/images/Sumillion-RGB.png" alt="Logo">
                </a>
            </div>
            <div class="px-2 mt-3">
                <h3 class="font-16 text-center">Welcome to your certification app!</h3>
            </div>
            <div class="w-100 mt-3">
                <ul class="nav flex-column pl-10 gap-3 py-2">
                    <li class="nav-item"><a href="#"
                            class="d-flex align-items-center gap-3 py-10 ps-4"><span><i
                                    class="mgc_add_line icon-1"></i></span> <span class="font-16">Add new</span></a>
                    </li>
                    <li class="nav-item"><a href="#"
                            class="active d-flex align-items-center gap-3 py-10 ps-4"><span><i
                                    class="mgc_grid_line icon"></i></span> <span class="font-16">Dashboard</span></a>
                    </li>
                    <li class="nav-item"><a href="#"
                            class="d-flex align-items-center gap-3 py-10 ps-4"><span><i
                                    class="mgc_certificate_2_line icon"></i></span> <span
                                class="font-16">Certificates</span></a></li>
                    <li class="nav-item"><a href="#" class="d-flex align-items-center gap-3 py-10 ps-4"><span><i
                                    class="mgc_exit_line icon"></i></span> <span class="font-16">Sign out</span></a>
                    </li>
                </ul>
            </div>
            <div class="mt-3">
                <img class="ad-size" src="assets/images/ad.png" alt="ad-image">
            </div>
            <div class="d-flex flex-column align-items-center gap-2 mt-4">
                <span class="font-12">Powered by</span>
                <a class="font-12" href="#">UTDS Optimal Choice</a>
            </div>
        </aside>
        @include('dashboard')

    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous">
    </script>
    <script src="{{ asset('assets/js/index.js')}}"></script>
</body>

</html>
