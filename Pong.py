import turtle
import random
right =  turtle.Turtle()
pen = turtle.Turtle()
pan = turtle.Turtle()
ball = turtle.Turtle()
screen = turtle.Screen()
screen.register_shape("paddle",((0,0),(10,0),(10,100),(0,100)))
pen.shape("paddle")
screen.bgcolor("black")
pen.color("white")
pen.speed(0)
pen.setheading(90)
pen.up()
def reset():
  pen.goto(-365,0)
  pan.shape("paddle")
  pan.speed(0)
  pan.color("white")
  pan.setheading(90)
  pan.up()
  pan.goto(351,0)
  ball.goto(0,0)
  ball.color("white")
  ball.shape("circle")
  ball.up()
  num=random.randint(0,3)
  if num==0:
    ball.setheading(random.randint(140,180))
  elif num==1:
    ball.setheading(random.randint(180,210))
  elif num==2:
    ball.setheading(random.randint(0,40))
  else:
    ball.setheading(random.randint(310,359))
  
reset()
def maveup():
  pen.forward(10)
def moveup():
  pan.forward(10)
def mavedown():
  pen.backward(10)
def movedown():
  pan.backward(10)
screen.onkey(maveup,"Up")
screen.onkey(moveup,"w")
screen.onkey(mavedown,"Down")
screen.onkey(movedown,"s")
screen.listen()

right.ht()
right.speed(0)
right.up()
right.goto(-200,200)
right.color("white")
right.write("Player One:")
right.goto(200,200)
right.write("Player Two")
x=0
wight = turtle.Turtle()
sight = turtle.Turtle()
y=0
wight.color("white")
sight.color("white")
sight.ht()
wight.ht()


while True:
  screen.tracer(0)
  screen.update()
  ball.speed(0)
  ball.forward(3)
  if ball.xcor()>351:
    wight.up()
    wight.clear()
    wight.goto(260,200)
    x+=1
    wight.write(x)
    reset()
  if ball.xcor()<-365:
    sight.up()
    sight.clear()
    y+=1
    sight.goto(-140,200)
    sight.write(y)
    reset()

  elif ball.ycor()<-300 and ball.heading()<180:
    ball.setheading(360-ball.heading())
  elif ball.ycor()<-300 and ball.heading()>180:
    ball.setheading(360-ball.heading())
  elif ball.ycor()>300 and ball.heading()>180:
    ball.setheading(360-ball.heading())
  elif ball.ycor()>300 and ball.heading()<180:
    ball.setheading(360-ball.heading())
  elif abs(ball.xcor()-pan.xcor())<15 and (pan.ycor()<=ball.ycor()<=pan.ycor()+100):
    ball.right(90)
  elif abs(ball.xcor()-pen.xcor())<15 and (pen.ycor()<=ball.ycor()<=pen.ycor()+100):
    ball.left(90)
  if pen.ycor()<-300:
    pen.goto(pen.xcor(),-300)
  elif pen.ycor()>250:
    pen.goto(pen.xcor(),250)
  elif pan.ycor()>250:
    pan.goto(pan.xcor(),250)
  elif pan.ycor()<-300:
    pan.goto(pan.xcor(),-300)
    