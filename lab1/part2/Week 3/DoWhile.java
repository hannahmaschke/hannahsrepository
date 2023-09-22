import java.util.Scanner;

public class DoWhile {

    public static void main(String[] args)
    {
        //user input
        Scanner scanner = new Scanner(System.in);

        //Variables
        boolean valid = false;

        //do whil
        do
        {
            //ask for a number
            System.out.println("Enter a number:");

            // try to convert to integer
            // only put the code that could break inside the try-catch
            try{
                Integer.parseInt(scanner.nextLine());
                valid = true; //able to convert

            } catch (Exception exception){

                valid = false; //unable to convert

            }
            // error in case input is not numeric
            if(valid == false)
                System.out.println("Error- I asked for a number!>:l");
        
        // checks if the nput is valid or not
        }while (!valid);

        //Exit prompt
        System.out.print("Press [enter] to exit ");
        scanner.nextLine();
        scanner.close();
    }



    
}