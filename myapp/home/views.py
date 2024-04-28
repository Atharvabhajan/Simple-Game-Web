from django.shortcuts import render,redirect
# from datetime import datetime
from home.models import Login,Contact
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,logout,login
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request,'index.html')

def loginuser(request):
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect("/index")
        else:
            messages.warning(request, "User not found!")
            return redirect("/login")
    return render(request,'login.html')
def register(request):
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        confirmpass=request.POST.get('confirmpassword')
        if password==confirmpass:
            if User.objects.filter(username=username).exists():
                messages.warning(request, "Username already exists. Please choose a different one.")
            else:
                User.objects.create_user(username=username,password=password)
                # regis.save()
                return render(request,'login.html')
        else:
            messages.warning(request, "Enter same password!")
    return render(request,'register.html')
def contact(request):
    if request.user.is_anonymous:
        return redirect("/login/")
    else:
        if(request.method=="POST"):
            name=request.POST.get('name')
            gmail=request.POST.get('email')
            phone=request.POST.get('phone')
            desc=request.POST.get('des')
            cntact=Contact(name=name,email=gmail,phone=phone,des=desc)
            cntact.save()
        return render(request,'contact.html')
def game(request):
    if request.user.is_anonymous:
        return redirect('/login')
    else:
        return render(request,"game.html")
def stone(request):
    if request.user.is_anonymous:
        return redirect('/login')
    else:
        return render(request,"stone.html")
def logoutuser(request):
    logout(request)
    return redirect('/login')
# def paper(request):
#     print("hello")
#     return render(request,"/static/paper.jpeg")
from django.shortcuts import render

def my_view(request):
    # Define the static file URLs
    rock_img_src = "{% static 'rock.jpeg' %}"
    paper_img_src = "{% static 'paper.jpeg' %}"
    scissor_img_src = "{% static 'scissor.jpeg' %}"
    
    # Pass the static file URLs as context variables to the template
    return render(request, 'my_template.html', {
        'rock_img_src': rock_img_src,
        'paper_img_src': paper_img_src,
        'scissor_img_src': scissor_img_src,
    })