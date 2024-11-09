import wikipedia
from typing import Tuple

def fetch_and_count(search_term: str) -> Tuple[str, int]:
    """
    Fetch a Wikipedia article and count instances of the search term.
    
    Args:
        search_term (str): The term to search for and count
        
    Returns:
        Tuple[str, int]: A tuple containing the article text and the count of search term instances
    """
    try:
        # Fetch the Wikipedia page
        page = wikipedia.page(search_term)
        
        # Get the article content
        content = page.content
        
        # Count instances of the search term (case-insensitive)
        count = content.lower().count(search_term.lower())
        
        return content, count
    
    except wikipedia.exceptions.DisambiguationError as e:
        # Handle multiple possible matches
        print(f"Disambiguation Error: '{search_term}' may refer to multiple articles.")
        print("Suggestions:", e.options[:5])  # Show first 5 suggestions
        return "", 0
    
    except wikipedia.exceptions.PageError:
        # Handle non-existent pages
        print(f"Error: No Wikipedia article found for '{search_term}'")
        return "", 0

def main():
    # Get search term from user
    search_term = input("Enter a term to search Wikipedia: ")
    
    # Fetch article and count instances
    article, count = fetch_and_count(search_term)
    
    # Display results
    if article:
        print(f"\nFound {count} instances of '{search_term}' in the article.")
        print("\nFirst 500 characters of the article:")
        print(article[:500], "...\n")

if __name__ == "__main__":
    main()