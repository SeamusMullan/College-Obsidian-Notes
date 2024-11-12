#stats #year2 

## Midterm Recap

- Set of all outcomes of an experiment $\to$ Sample Space
- If A and B are mutually exclusive, then $\to$ A \Cap B = 0
	- NB Mutually Exclusive are NOT independent (and vice versa)
- If Independent $\to$ P(A|B) = P(A)
- Anagrams for word SPORTS (or PILLOW) $\to$ 6!/2! = 360
- X is num earthquakes per year $\to$ Poisson
- num ways select captain + vice captain from 11 players $\to$ 110
- Coin tossed N times, what distribution $\to$ Binomial Distribution
- Bet on pair of dice, same num $\to$ +24, diff $\to$ -6. Expected winnings $\to$ -1 euro
- Disease infects 1/200, test not perfect.. blah blah.. $\to$ 0.0148
- X~Poisson($\lambda$=4), P(X>1) ie 1-P(X=0)-P(X=1) $\to$ 0.9084

## Areas under the normal curve

NB, Normal $\to$ bell curve symmetrical about $\mu$
If we take $\frac{x-\mu}{\sigma}$ we get the standard normal distribution. ($Z \to N(0,1)$ )

### Example Question 1:

Suppose test scores for a group of students for an exam are normally distributed with a mean 50 and standard deviation 10.


Variance = $\sigma^{2}= 10^2= 100$ 

*What is the probability of a randomly selected student having a grade > 80*

$P(X>80) = P\left( \frac{X-50}{10}, \frac{80-50}{10} \right)$
$\text{Z Score }= \frac{x-\mu}{\sigma} = 3$
$\therefore \text{we can rewrite this as } P(Z>3)$
$= 0.5 - P(0 < Z < 3)$ (rewritten since the value can be infinite)

Using the stats tables in our logs/tables book we can find the value for this to be **0.0013**

## Independence (Independent Random Variables)

Two discrete variables X and Y are independent if their joint mass probability function factors into their individual probability mass functions.

$$P(X=x, Y=y) = P(X=x)P(Y=y), \forall x,y$$

