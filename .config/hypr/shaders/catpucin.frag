precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;
uniform sampler2D cat_texture; // Texture containing the cat image
uniform float cat_intensity;    // Intensity of the cat overlay

void main() {
    // Sample the original texture
    vec4 original_color = texture2D(tex, v_texcoord);
    
    // Sample the cat texture
    vec4 cat_color = texture2D(cat_texture, v_texcoord);
    
    // Blend the original color with the cat overlay using cat_intensity
    vec4 final_color = mix(original_color, cat_color, cat_intensity);
    
    // Output final color
    gl_FragColor = final_color;
}
