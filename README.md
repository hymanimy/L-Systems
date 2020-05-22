# L-Systems
Interactive Lindermayer-Systems in JS and HTML

A Lindermayer System (L-System) is a mathematical grammar system which builds upon itself. 
The L-System consists of an alphabet, a string called the Axiom and a list of production rules
L-Systems are useful for modelling self-similar growth since previous levels of the L-Systenm 
Create more complex versions in the next level, in accordance to its production rules

The list of rules for an L-System can be made as a dictionary in JS 
That takes a character and outputs a string. 

These alphabetical outputs can be interpreted as drawing functions such as forward or rotate
And this creates a beautiful visualisation of the L-System 

In the webpage, you can mess around with the Lystems which I have created in the JS file. You can create more or even create 
your own since there is a class for the Lsystem. We can randomise these Lsystems and vary their angle bases on the coordinate of our mouse
if we press the correct buttons on the webpage. Ive tried to make the Lsystem class as flexible as possible so it can do most Lsystems, 
but this is at the cost of the file looking less concise and pretty. 
