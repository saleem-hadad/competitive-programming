package main

import (
	"fmt"
)

func fib(number int, memo map[int]int) int {
	if memo[number] > 0 {
		return memo[number]
	}
	if number <= 2 {
		return 1
	}

	memo[number] = fib(number-1, memo) + fib(number-2, memo)

	return memo[number]
}

func main() {
	memo := map[int]int{}

	fmt.Println(fib(30, memo))
}
