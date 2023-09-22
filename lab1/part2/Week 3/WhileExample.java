// loop example

import java.util.Scanner;

/**
 * While example
 */
public class WhileExample
{
    public static void main(String[] args)
    {
        //user input
        Scanner scanner = new Scanner(System.in);

        //Variablse
        int count = 0; // start value

        // count up to 99
        while(count < 100)
        {
            System.out.println("Count: " + count);
            count++; //same as +=1
        }
        System.out.println("I'm done counting lol");
        
        //Exit prompt
        System.out.print("Press [enter] to exit ");
        scanner.nextLine();
        scanner.close();
    }
}