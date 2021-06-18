const submitButton = document.querySelector("button")
const moreInfo = document.querySelector(".moreInfo")

const content = `
<div class="columns">
    <div class="column is-5 is-offset-6 sectionHead" data-aos="fade-up">
        <p class="title" id="titleSectionHead">
            Fullstack python programmer and mobile app creator.
        </p>
    </div>
</div>

<div class="columns">
    <div class="column is-10 is-offset-1 sectionHead" id="projectTitle" data-aos="fade-up">
        <p class="title" id="titleSectionHead">
            Projects:
        </p>
    </div>
</div>

<div class="columns">
    <div class="column is-5 is-offset-1 sectionHead" data-aos="fade-up">
        <div class="card">
            <div class="card-content" id="titleSectionHead">
                <p class="title">
                    TimeKeep - Planner and Tracker
                </p>

                <p class="subtitle">
                    iOS App to time your day, see what you've spent your time on, and
                    build
                    routines and healthy habits. Available on the app store now!
                </p>
            </div>

            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Available <a
                            href="https://apps.apple.com/us/app/timekeep-planner-and-tracker/id1499044751">here:
                        </a>
                    </span>
                </p>
            </footer>


            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Source code available <a href="https://github.com/DarrenKey/TimeKeep">here:</a>
                    </span>
                </p>
            </footer>

        </div>
    </div>
</div>


<div class="columns">
    <div class="column is-5 is-offset-6 sectionHead" data-aos="fade-up">
        <div class="card">
            <div class="card-content" id="titleSectionHead">
                <p class="title">
                    YEP Chat - Better Emotes
                </p>

                <p class="subtitle">
                    <strong>[Abandoned]</strong> Alternate Twitch-viewing app. View 3rd-party emotes available
                    from
                    BetterTwitchTV
                    and FrankerFaceZ on your phone!
                </p>
            </div>


            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Source code available <a
                            href="https://github.com/DarrenKey/YEP-Chat---BTTV-FFZ-Emotes-on-iOS-Abandoned-">here:</a>
                    </span>
                </p>
            </footer>

        </div>
    </div>
</div>`;

const checkFields = function () {
    const fields = document.querySelectorAll("input")

    if (fields[0].value === "Python" && fields[1].value === "Swift") {
        moreInfo.innerHTML = content;
    }
}

submitButton.addEventListener("click", checkFields)