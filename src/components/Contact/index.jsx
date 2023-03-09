import React from 'react';
import Capital from '../images/capital.jpg';

const Contact = () => {
    return (
        <div class="container contact">
            <div class="p-5 my-4 bg-light rounded-3 innerbox" style={{backgroundImage: 'url('+Capital+')', backgroundSize: 'cover', height: '100%', width: '100%'}}>
                <h1>Contact Me</h1>
                <section class="mb-4">
                    <p class="w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>
                    <div class="row">
                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control"></input>
                                                <label for="name" class="">Your name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control"></input>
                                                <label for="email" class="">Your email</label>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control"></input>
                                                <label for="subject" class="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div class="text-center text-md-left">
                                <button class="btn btn-secondary" onclick="document.getElementById('contact-form').submit();">Send</button>
                            </div>
                            <div>
                                <h3 id="response"></h3>
                            </div>
                            <div class="status"></div>
                        </div>


                    </div>

                </section>
            </div>
        </div>
    );
};

export default Contact;