import java.io.*;
import java.util.*;

public class Encoder {

    private static String[] reference = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", "*", "+", ",", "-", ".", "/"};

    public static String encode (String plainText){

        List<String> referenceList = new ArrayList<String>(Arrays.asList(reference));

        String returnString= new String();

        Random rand = new Random();
        int nxt = rand.nextInt(44);

        // int nxt = 1;

        returnString += reference[nxt];

        for (int counter = 0; counter < plainText.length(); counter++) { 	

            String character =  Character.toString(plainText.charAt(counter));

            if (referenceList.indexOf(character) != -1) {

                int newIndex = 0;
                int currentIndex = referenceList.indexOf(character);

                if (currentIndex - nxt >= 0) {
                    newIndex = currentIndex - nxt;
                } else {
                    newIndex = 44 + (currentIndex - nxt);
                }
    
                returnString = returnString + referenceList.get(newIndex);
                        
            } else {
                returnString = returnString + character;
            }
        }   

        return returnString;
    }


    public static String decode (String encodedText){

        List<String> referenceList = new ArrayList<String>(Arrays.asList(reference));

        String returnString= new String();

        String decoderChar =  Character.toString(encodedText.charAt(0));

        int reset = referenceList.indexOf(decoderChar);

        for (int counter = 1; counter < encodedText.length(); counter++) { 	

            String character =  Character.toString(encodedText.charAt(counter));

            if (referenceList.indexOf(character) != -1) {

                int newIndex = 0;
                int currentIndex = referenceList.indexOf(character);

                if (currentIndex + reset <= 43) {
                    newIndex = currentIndex + reset;
                } else {
                    newIndex = currentIndex + reset - 44;
                }
    
                returnString = returnString + referenceList.get(newIndex);
                        
            } else {
                returnString = returnString + character;
            }
        }   

        return returnString;

    }



    public static void main(String[] args) {

        Scanner userInp = new Scanner(System.in);
        System.out.print("Enter filename> ");
        String inputString = userInp.nextLine();
        
        String encodedText = encode(inputString);

        System.out.println("This is the encoded text: " + encodedText);


        System.out.println();
        System.out.println("This is the decoded text: " + decode(encodedText));


    }


}