<div id="right_container" class="container bg-gray z-3 top-padding pb-5 px-5 rounded-lg2 my-50">
            <div class=" d-flex flex-column gap-4 pt-2 pb-3 px-2">
                <div>
                    <h2 class="font-18 text-decoration-underline color-blue">Generate a new certificate</h2>
                </div>
                <div class="my-3">
                    <p class="font-16 color-primary-gray" style="font-size: 15px;">Start by filling in the company and client information first and than move to add the products to offset.</p>
                </div>
                <div>
                    <form action="#" class="d-flex flex-column gap-5 px-2">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-column gap-4 basis-49 me-4">
                                <div class="d-flex flex-column gap-2">
                                    <label for="company_name">Company Name</label>
                                    <input type="text" name="company_name" id="company_name">
                                </div>
                                <div class="d-flex flex-column gap-2">
                                    <label for="company_address">Address</label>
                                    <input type="text" name="company_address" id="company_address">
                                </div>
                            </div>
                            <div class="basis-49">
                                <div class="d-flex flex-column justify-content-between" >
                                    <label class="mb-2" for="company_logo">Company Logo</label>
                                    <div>
                                        <img style="width:100px;height: 100px;" src="{{ asset('assets/images/Sumillion-RGB.png')}}" alt="">
                                    </div>
                                    <input class="mt-1" type="file" name="company_logo" id="company_logo" accept="image/x-png,image/gif,image/jpeg">
                                </div>
                                <p class="color-black font-12 mt-2">Maximum file size: 3 MB</p>
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Add Products">
                        </div>
                    </form>
                </div>
            </div>
        </div>