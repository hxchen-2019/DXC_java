call mvn dependency:copy-dependencies -DoutputDirectory=bin
echo "Maven dependencies copied successfully"
javac -d bin -cp bin/*;src/main/java src/main/java/com/quantum/onboarding/OnboardingApplication.java