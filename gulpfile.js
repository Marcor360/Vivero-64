import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { error } from 'console';

const sass = gulpSass(dartSass);

export function css(done) {
    src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
    done()
}

export function dev(done) {
    watch('src/scss/**/*.scss', css);

}