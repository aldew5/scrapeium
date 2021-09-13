import pygame
import random
import os

script_dir = os.path.dirname('Obstacles')
rel_path = r"C:\Users\Owner\Desktop\Falling-Blocks\Images\Obstacles"
abs_file_path = os.path.join(script_dir, rel_path)

# loading objects
current_file = r"\finalboulder.png"
boulderimg = pygame.image.load(abs_file_path + current_file)
current_file = r"\betterball.png"
snowballimg = pygame.image.load(abs_file_path + current_file)
current_file = r"\bestrock.png"
rockimg = pygame.image.load(abs_file_path + current_file)

rel_path = r"C:\Users\Owner\Desktop\Falling-Blocks\Images\Powerups"
script_dir = os.path.dirname('Powerups')
abs_file_path = os.path.join(script_dir, rel_path)

# loading powerups
current_file = r"\resizedheart.png"
heartimg = pygame.image.load(abs_file_path + current_file)
current_file = r"\bestgun.png"
gunimg = pygame.image.load(abs_file_path + current_file)
current_file = r'\better_small.png'
side_gun = pygame.image.load(abs_file_path + current_file)

#loading background
abs_file_path = os.path.join('Backgrounds',r"C:\Users\Owner\Desktop\Falling-Blocks\Images\Backgrounds")
bg = pygame.image.load(abs_file_path + r"\background.jpg")


rel_path = r"C:\Users\Owner\Desktop\Falling-Blocks\Images\Player"
script_dir = os.path.dirname('Player')
abs_file_path = os.path.join(script_dir, rel_path)

# character
char = pygame.image.load(abs_file_path + r'\standing.png')

walkRight = [pygame.image.load(abs_file_path + r'\R1.png'), pygame.image.load(abs_file_path + r'\R2.png'), pygame.image.load(abs_file_path + r'\R3.png'), pygame.image.load(abs_file_path + r'\R4.png'),\
             pygame.image.load(abs_file_path + r'\R5.png'), pygame.image.load(abs_file_path + r'\R6.png'), pygame.image.load(abs_file_path + r'\R7.png'), pygame.image.load(abs_file_path + r'\R8.png'), pygame.image.load(abs_file_path + r'\R9.png')]
walkLeft = [pygame.image.load(abs_file_path + r'\L1.png'), pygame.image.load(abs_file_path + r'\L2.png'), pygame.image.load(abs_file_path + r'\L3.png'), pygame.image.load(abs_file_path + r'\L4.png'),\
            pygame.image.load(abs_file_path + r'\L5.png'), pygame.image.load(abs_file_path + r'\L6.png'), pygame.image.load(abs_file_path + r'\L7.png'), pygame.image.load(abs_file_path + r'\L8.png'), pygame.image.load(abs_file_path + r'\L9.png')]



