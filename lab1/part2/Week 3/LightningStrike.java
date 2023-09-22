// Name: Hannah Maschke
// Date: September 20, 2023
// App Name: Lightning Strike
// App Description: App that calculates how far away a lightning strike is judging by the thunder

import java.util.Scanner;

public class LightningStrike
 {  
    // Constants
    static final String SET_TITLE = "\033]0;%s\007";
    static final String CLEAR_TERMINAL = "\033c";

    // speed of sound constants
    static final float SOUND_SPEED_KM = 0.342f;  // f means float
    static final float SOUND_SPEED_MILES = 0.213f;
    

    public static void main(String[] args)
    {
        //user input
        Scanner scanner = new Scanner(System.in);

        // Variables
        String restart;
        boolean valid;
        float seconds = 0; //decimal places are possible with floats
        float distanceKM, distanceMiles;

        // set the title
        System.out.printf(SET_TITLE, "Lightning Strike - Hannah Maschke");

        //Repeat the app in case the user enters "r"
        do
        {
            // print the banner
            System.out.println(Art.LIGHTNING_ART);

            // Instructions
            System.out.println("Instructions: ");
            System.out.println("Count the seconds between when you see the lightning and when you hear the thunder!");

            // Validation loop
            // Keep asking for seconds until a valid input is given
            do
            {   
                // Ask for seconds
                System.out.println("Enter how many seconds: ");

                try {
                    seconds = Float.parseFloat(scanner.nextLine());
                    valid = true; //able to convert
                } catch (Exception exception) 
                {
                    valid = false; //not able to convert
                }
                    // Error in cas input is not numeric
                if (!valid || seconds < 0)  // || means "or"
                {
                    System.out.println("Error - Seconds must be a positive number!");
                    valid = false; // not valid anymore

                }
                    
                

            }while(!valid); //not valid

            // Output screen
            // only get here after we recieve a valid input
            System.out.println(CLEAR_TERMINAL + Art.LIGHTNING_ART);

            // Calculate the distances in KM and miles
            distanceKM = seconds * SOUND_SPEED_KM;
            distanceMiles = seconds * SOUND_SPEED_MILES;

            // In case the lightning  struck your house
            if(seconds == 0)
                System.out.println("Uh oh! The lightning struck your house! :C");

            // User is alive
            else
            
                System.out.printf("The lightning struck %s km away from you!\n", distanceKM, distanceMiles );


             // exit prompt
            System.out.print("Enter [r] to restart: ");
            restart = scanner.nextLine();
            System.out.println(CLEAR_TERMINAL);
        

            // In Java we usee .equals() to compare strings
        }while(restart.equals("r"));

        // Close communication with terminal
        scanner.close();
    }




    
}
