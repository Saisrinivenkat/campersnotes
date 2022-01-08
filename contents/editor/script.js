
addModal();

function addModal() {
  const newBtn = document.createElement("button");
  newBtn.innerHTML = "CaNo";
  newBtn.classList.add("new-button");
  newBtn.setAttribute("id", "myBtn");
  newBtn.addEventListener("click", openModal);

  let video = document.getElementsByClassName("ytp-right-controls")[0];
  video.parentNode.appendChild(newBtn);
}

function addScreen(element) {
  let modalElt = document.createElement("div");
  modalElt.classList.add("modal");
  modalElt.setAttribute("id", "myModal");

  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // let closeButton = document.createElement("span");
  // closeButton.classList.add("close");
  // closeButton.innerHTML = "&times;";

  // modalContent.appendChild(closeButton);
  modalElt.appendChild(modalContent);

  element.appendChild(modalElt);
}

function clearScreen(element) {
  let vid = document.getElementById("my-video-frame");
  vid.remove();
}

function openModal() {
  addScreen(document.body);

  let video = document.getElementsByClassName("video-stream")[0];
  video.pause();

  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  let modalContent = document.getElementsByClassName("modal-content")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    let videoId = window.location.href.split("=")[1];

    let currentTime =
      document.getElementsByClassName("video-stream")[0].currentTime;
    currentTime = Math.floor(currentTime);

    let iframeElt = document.createElement("iframe");
    iframeElt.src = `https://www.youtube.com/embed/${videoId}?start=${currentTime}&autoplay=1&showinfo=0&rel=0&fs=0&autohide=0`;
    iframeElt.width = 560;
    iframeElt.height = 315;
    iframeElt.frameborder = 0;
    iframeElt.setAttribute("id", "my-video-frame");
    modalContent.appendChild(iframeElt);

    modal.style.display = "block";



      // notepad

    $('.modal-content').append(`

      <iframe id="myframe" name="myframe" style="width: 100%; height: 100%;"></iframe>  

    `);


    $("#myframe").contents().find('html').html(`
    
    <html>

    <head>
        <meta charset="UTF-8">
        <title>document</title>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

      <style>
        

        body {}

        iframe {
            width: 100%;
            border: none;
        }

        .container {
          width: 60%;
          position: absolute;
          border: 1px solid #f5f5f5;
          border-radius: 5px;
          box-shadow: 2px 5px 10px #e4e4e4;
        }

        .nav {
            display: flex;
            flex-wrap: wrap;


            background: #f5f5f5;
            padding: 5px;
        }

        .nav > * {
            max-width: max-content;
        }

        img {
            max-width: 50px;
            max-height: 50px;
        }


        .button {
            margin: 4px;
            padding: 10px 10px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            transition: all 150ms linear;
            text-align: center;
            white-space: nowrap;
            text-decoration: none !important;
            text-transform: none;
            text-transform: capitalize;
            color: #fff;
            border: 0 none;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.3;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            justify-content: center;
            align-items: center;
            flex: 0 0 160px;
            box-shadow: 2px 5px 6px #e4e4e4;
        }

        .button:hover {
            transition: all 150ms linear;
            opacity: .85;
        }

        .button:active {
            transition: all 150ms linear;
            opacity: .75;
        }

        .button:focus {
            outline: 1px dotted #959595;
            outline-offset: -4px;
        }

        .button.-regular {
            color: #202129;
            margin-bottom: 13px;
            background-color: #f2f2f2;
        }

        .button.-regular:hover {
            color: #202129;
            background-color: #e1e2e2;
            opacity: 1;
        }

        .button.-regular:active {
            background-color: #d5d6d6;
            opacity: 1;
        }

        .inpColor {
            background-color: #f2f2f2;
            border: none;
        }



        .tooltip {
            position: relative;
            color: #3B627E;
            font-weight: bolder;
            cursor: pointer;
        }

        .tooltip:hover::before {
            content: "";
            border: solid transparent;
            border-bottom-color: rgb(86, 85, 85);
            border-width: 10px;
            position: absolute;
            top: 20px;
        }

        .tooltip:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            min-width: 38px;
            font-weight: 100;
            line-height: 1.3em;
            margin: 0;
            color: #f5f5f5;
            background-color: rgb(86, 85, 85);
            padding: 15px;
            border-radius: 5px;
            left: -39%;
            top: 40px;
            z-index: 1;
            font-size: .7em;
        }

        .inp {
            width: 121px;
            float: left;
            padding: 7px;
        }







      </style>

    </head>

    <body onload="(function(){console.log("fjnvf");})()">
        <div class="if container" style="width: 90%;position: absolute;border: 1px solid #f5f5f5;border-radius: 5px;box-shadow: 2px 5px 10px #e4e4e4;">
            <div class="if nav">
                <button data-tooltip="bold" class="if tooltip button -regular" onclick="execCmd('bold');"><i class="fa fa-bold"></i></button>
                <button data-tooltip="italic" class="tooltip button -regular" onclick="execCmd('italic');"><i class="fa fa-italic"></i></button>
                <button data-tooltip="underline" class="tooltip button -regular" onclick="execCmd('underline');"><i class="fa fa-underline"></i></button>
                <button data-tooltip="strikeThrough" class="tooltip button -regular" onclick="execCmd('strikeThrough');"><i class="fa fa-strikethrough"></i></button>
                <button data-tooltip="align left" class="tooltip button -regular" onclick="execCmd('justifyLeft');"><i class="fa fa-align-left"></i></button>
                <button data-tooltip="align center" class="tooltip button -regular" onclick="execCmd('justifyCenter');"><i class="fa fa-align-center"></i></button>
                <button data-tooltip="align right" class="tooltip button -regular" onclick="execCmd('justifyRight');"><i class="fa fa-align-right"></i></button>
                <button data-tooltip="align justify" class="tooltip button -regular" onclick="execCmd('justifyFull');"><i class="fa fa-align-justify"></i></button>
                <button data-tooltip="cut" class="tooltip button -regular" onclick="execCmd('cut');"><i class="fa fa-cut"></i></button>
                <button data-tooltip="copy" class="tooltip button -regular" onclick="execCmd('copy');"><i class="fa fa-copy"></i></button>
                <button data-tooltip="indent" class="tooltip button -regular" onclick="execCmd('indent');"><i class="fa fa-indent"></i></button>
                <button data-tooltip="dedent" class="tooltip button -regular" onclick="execCmd('outdent');"><i class="fa fa-dedent"></i></button>
                <button data-tooltip="subscript" class="tooltip button -regular" onclick="execCmd('subscript');"><i class="fa fa-subscript"></i></button>
                <button data-tooltip="superscript" class="tooltip button -regular" onclick="execCmd('superscript');"><i class="fa fa-superscript"></i></button>
                <button data-tooltip="undo" class="tooltip button -regular" onclick="execCmd('undo');"><i class="fa fa-undo"></i></button>
                <button data-tooltip="redo" class="tooltip button -regular" onclick="execCmd('redo');"><i class="fa fa-repeat"></i></button>
                <button data-tooltip="unordered list" class="tooltip button -regular" onclick="execCmd('insertUnorderedList');"><i class="fa fa-list-ul"></i></button>
                <button data-tooltip="ordered list" class="tooltip button -regular" onclick="execCmd('insertOrderedList');"><i class="fa fa-list-ol"></i></button>
                <button data-tooltip="paragraph" class="tooltip button -regular" onclick="execCmd('bold');"><i class="fa fa-paragraph"></i></button>
                <button data-tooltip="horizontal rule" class="tooltip button -regular" onclick="execCmd('insertHorizontalRule');">HR</button>
                <select data-tooltip="heading" class="tooltip button -regular" onchange="execCommandWithArg('formatBlock',this.value)">
                    <option value="">Heading</option>
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                </select>
                <button data-tooltip="create link" class="tooltip button -regular" onclick="execCommandWithArg('createLink',prompt('Enter a URL','http://'));"><i class="fa fa-link"></i></button>
                <button data-tooltip="remove link" class="tooltip button -regular" onclick="execCmd('unlink');"><i class="fa fa-unlink"></i></button>
                <button data-tooltip="show source code" class="tooltip button -regular" onclick="toggleSource();"><i class="fa fa-code"></i></button>
                <button data-tooltip="toggle edit" class="tooltip button -regular" onclick="toggleEdit();">Toggle Edit</button>
                <button data-tooltip="insert image" class="tooltip button -regular" onclick="execCommandWithArg('insertImage',prompt('Enter the image URL',''));"><i class="fa fa-file-image-o"></i></button>
                <button data-tooltip="select all" class="tooltip button -regular" onclick="execCmd('selectAll');">Select All</button>
                <div class="button -regular inp">
                    <label for="color">Color:</label>
                    <input id="color" data-tooltip="color" class="tooltip inpColor" type="color" onchange="execCommandWithArg('foreColor',this.value)">
                </div>
                <div class="button -regular inp">
                    <label for="background">Background:</label>
                    <input id="background" data-tooltip="background" class="tooltip inpColor" type="color" onchange="execCommandWithArg('hiliteColor',this.value)">
                </div>
                <select data-tooltip="font name" class="tooltip button -regular" onchange="execCommandWithArg('fontName',this.value)">
                    <option value="">Font family</option>
                    <option value="Arial">Arial</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                    <option value="Courier">Courier</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <select data-tooltip="font size" class="tooltip button -regular" onchange="execCommandWithArg('fontSize',this.value)">
                    <option value="">Font size</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
            <iframe name="richTextField" style="width: 100%px;height: 100%; border: none;"></iframe>
        </div>
        
        
        <script type="text/javascript">

          let enableEditMode = () => {
            console.log("this wotksv");
            richTextField.document.designMode = 'On';
          }
        
          let execCmd = (command) => {
              richTextField.document.execCommand(command, false, null);
          }
          
          let execCommandWithArg = (command, arg) => {
              richTextField.document.execCommand(command, false, arg);
          }
          
          let toggleSource = () => {
              if (showingSourceCode) {
                  bodyTag.innerHTML = bodyTag.textContent;
                  showingSourceCode = false;
              } else {
                  bodyTag.textContent = bodyTag.innerHTML;
                  syntaxhighlighter(bodyTag);
                  showingSourceCode = true;
              }
          }
          
          let toggleEdit = () => {
              if (isInEditMode) {
                  richTextField.document.designMode = 'Off';
                  isInEditMode = false;
              } else {
                  richTextField.document.designMode = 'On';
                  isInEditMode = true;
              }
          }
          
        </script>
    </body>

    </html>
    
    
    
    `);




































  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    clearScreen(document.body);
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      clearScreen(document.body);
      modal.style.display = "none";
    }
  };
}
