# WebSite


Installation step by step
install python` https://www.python.org/downloads/
    add path must be specified during installation
install node.js




PYTHON
Open a terminal in Visual studio
    git clone "repo's link"
    py -m venv .venv
        if an error occurred
            Click windows button
            search "Windows PowerShell"
            click the arrow on the right and select "Run as Administrator" and write
            "Get-ExecutionPolicy"
            "Set-ExecutionPolicy RemoteSigned"
            close Administartion PowerShell and open Visual Studio's terminal and write "py -m venv .venv"
        ..venv\Scripts\activate
        py -m pip install --upgrade pip
        pip install -r ./requirements.txt
        python ./manage.py makemigrations
        python ./manage.py migrate
        python ./manage.py runserver
