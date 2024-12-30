<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rizky Hotel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon_io/favicon.ico"/>
    <link rel="icon" type="image/png" sizes="16x16" href="favicon_io (2)/favicon-16x16.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="favicon_io (2)/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="favicon_io (2)/android-chrome-192x192.png"/>
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="favicon_io (2)/android-chrome-512x512.png"/>
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="favicon_io (2)/apple-touch-icon.png"/>
    <link rel="manifest" href="favicon_io (1)/site.webmanifest"/>
    <style>
        * {
            font-family: "Montserrat", sans-serif;
        }
        .h-font {
            font-family: "Roboto", sans-serif;
        }
        body {
            user-select: none;
        }
        .form-control {
            transition: border-color 0.3s, box-shadow 0.3s;
        }
        .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
        .badge {
            border-radius: 1rem;
        }
        .modal-body {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }
        .text-primary {
            font-family: 'Roboto', sans-serif;
        }
        .iti {
            width: 100%;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white px-lg-3 py-lg-2 shadow-sm sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand me-5 fw-bold fs-3 h-font" href="index.php">Rizky Hotel</a>
            <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active me-2" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-2" href="#">Rooms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-2" href="#">Facilities</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-2" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-2" href="#">About Us</a>
                    </li>
                </ul>
                <div class="d-flex">
                    <button type="button" class="btn btn-outline-dark shadow-none me-lg-3 me-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                        Login
                    </button>
                    <button type="button" class="btn btn-outline-dark shadow-none" data-bs-toggle="modal" data-bs-target="#registerModal">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </nav>
    
    <div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h5 class="modal-title d-flex align-items-center">
                            <i class="bi bi-person fs-3 me-2"></i>User Login
                        </h5>
                        <button type="reset" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <h5 class="text-primary text-center mb-4">Login</h5>
                        <div class="mb-3">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control shadow-none" placeholder="you@example.com" required>
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control shadow-none" placeholder="Enter your password" required>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <button type="submit" class="btn btn-dark shadow-none">Login</button>
                            <a href="javascript:void(0)" class="text-secondary text-decoration-none">Forgot Password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="registerModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h5 class="modal-title d-flex align-items-center">
                            <i class="bi bi-person-add fs-3 me-2"></i>User Registration
                        </h5>
                        <button type="reset" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-5 bg-light rounded shadow-lg">
                        <div class="text-center mb-4">
                            <h5 class="fw-bold text-primary">Please Fill Out Your Details</h5>
                            <span class="badge rounded-full mb-3 text-wrap lh-base bg-info text-white">
                                <i class="fas fa-info-circle me-2"></i>Note: Your details must match your ID (KTP, Driving License, Passport, Visa, etc.) required during check-in.
                            </span>
                        </div>
                        <div class="container-fluid">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Name</label>
                                    <input type="text" class="form-control shadow-sm rounded-pill border-0 bg-white" placeholder="Enter your name" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Email Address</label>
                                    <input type="email" class="form-control shadow-sm rounded-pill border-0 bg-white" placeholder="you@example.com" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Phone Number</label>
                                    <input type="tel" id="phone" class="form-control shadow-sm rounded-pill border-0 bg-white" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Profile Picture</label>
                                    <input type="file" class="form-control shadow-sm rounded-pill border-0 bg-white">
                                </div>
                                <div class="col-md-12">
                                    <label class="form-label fw-bold">Address</label>
                                    <textarea class="form-control shadow-sm rounded-3 border-0 bg-white" rows="2" placeholder="Your address" required></textarea>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Pincode</label>
                                    <input type="text" class="form-control shadow-sm rounded-pill border-0 bg-white" placeholder="123456" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Date of Birth</label>
                                    <input type="date" class="form-control shadow-sm rounded-pill border-0 bg-white" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Password</label>
                                    <input type="password" class="form-control shadow-sm rounded-pill border-0 bg-white" id="password" placeholder="Create a password" required onpaste="return false;" oncopy="return false;" oncut="return false;">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Confirm Password</label>
                                    <input type="password" class="form-control shadow-sm rounded-pill border-0 bg-white" id="confirmPassword" placeholder="Confirm password" required onpaste="return false;" oncopy="return false;" oncut="return false;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center my-3">
                        <button type="submit" class="btn btn-dark shadow-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
    <script>
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            separateDialCode: true,
            initialCountry: "auto",
            geoIpLookup: function(success, failure) {
                fetch("https://ipapi.co/json/").then(function(resp) {
                    return resp.json();
                }).then(function(data) {
                    success(data.country_code);
                }).catch(function() {
                    success("ID"); // Default to Indonesia if geolocation fails
                });
            },
        });

        document.getElementById('password').addEventListener('keydown', function (event) {
            // Prevent copy and paste
            if (event.ctrlKey && (event.key === 'c' || event.key === 'v' || event.key === 'x')) {
                event.preventDefault();
            }
        });

        document.getElementById('confirmPassword').addEventListener('keydown', function (event) {
            // Prevent copy and paste
            if (event.ctrlKey && (event.key === 'c' || event.key === 'v' || event.key === 'x')) {
                event.preventDefault();
            }
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>